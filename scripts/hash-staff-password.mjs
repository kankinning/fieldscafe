import { randomBytes, pbkdf2Sync } from "node:crypto";
import { stdin, stdout } from "node:process";
if (!stdin.isTTY)
  throw new Error("Run in an interactive terminal. Password input is hidden.");
stdout.write("New staff password (minimum 14 characters): ");
stdin.setRawMode(true);
stdin.resume();
stdin.setEncoding("utf8");
let password = "";
stdin.on("data", (chunk) => {
  for (const char of chunk) {
    if (char === "\u0003") {
      stdin.setRawMode(false);
      process.exit(130);
    }
    if (char === "\r" || char === "\n") {
      stdin.setRawMode(false);
      stdin.pause();
      stdout.write("\n");
      if (password.length < 14) {
        console.error("Password must contain at least 14 characters.");
        process.exit(1);
      }
      const salt = randomBytes(16).toString("hex");
      const hash = pbkdf2Sync(password, salt, 600000, 32, "sha256").toString(
        "hex",
      );
      password = "";
      stdout.write(salt + ":" + hash + "\n");
      process.exit(0);
    }
    if (char === "\u007f") password = password.slice(0, -1);
    else password += char;
  }
});
