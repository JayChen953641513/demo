/*
 * @Description: 这是***页面（组件）
 * @Date: 2023-08-17 10:49:03
 * @Author: chenyujie
 * @LastEditors: chenyujie
 * @LastEditTime: 2023-08-18 18:16:18
 */
import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";
const ffmpeg = createFFmpeg({
    log: true,
    progress: true
});
// const ffmpeg = new FFmpeg()
// const baseURL = 'https://unpkg.com/@ffmpeg/core-mt@0.12.2/dist/esm'
const transcode = async (videoURL, fileType) => {
    if (!ffmpeg.isLoaded()) {
        await ffmpeg.load();
    }
    ffmpeg.FS("writeFile", `test.${fileType}`, await fetchFile(videoURL));
    await ffmpeg.run(
        "-i",
        `test.${fileType}`,
        "-c:v",
        "libx264",
        "-crf",
        "30",
        "test.mp4"
    );
    const data = ffmpeg.FS("readFile", "test.mp4");
    const url = URL.createObjectURL(
        new Blob([data.buffer], { type: "video/mp4" })
    );
    return url
}
//module.exports = { transcode };
export { transcode }