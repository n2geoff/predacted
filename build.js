const VERSION = "0.9.0";
const BANNER = `/* Predacted.min.js v${VERSION} | https://github.com/n2geoff/predacted */\n`;

async function build() {
  const filename = "predacted.min.js";

  const outpath = `./dist/${filename}`;

  const result = await Bun.build({
    entrypoints: ["./index.js"],
    outdir: "./dist",
    naming: filename,
    minify: true,
    sourcemap: "none",
  });

  if (result.success) {
    // 1. Read the newly created minified file
    const file = Bun.file(outpath);
    const originalContent = await file.text();

    // 2. Overwrite it with the Banner + Content
    await Bun.write(outpath, BANNER + originalContent);

    console.log(
      `✅ ${filename} built (${BANNER.length + originalContent.length} bytes)`,
    );
  } else {
    console.error(`❌ Build failed: ${filename}`, result.logs);
  }
}

build();
