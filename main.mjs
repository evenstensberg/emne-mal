import fs from "node:fs";
import path from "node:path";
import {glob} from "node:fs/promises";
import  * as markdown from "markdown-pdf";

const md = markdown.default

for await (const file of glob("./docs/notes/**.md")) {
    const name = path.basename(file).split(".md")
    const pdfName = `./docs/generated/${name[0]}.pdf`
    fs.createReadStream(file).pipe(md()).pipe(fs.createWriteStream(pdfName))
}