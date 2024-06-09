const { exec } = require("child_process");

// Run the build process
exec("npm run build", (error, stdout, stderr) => {
  if (error) {
    console.error(`Build error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Build stderr: ${stderr}`);
    return;
  }
  console.log(`Build stdout: ${stdout}`);
});

exec("npx serve dist", (error, stdout, stderr) => {
 if (error) {
   console.error(`Build error: ${error.message}`);
   return;
 }
 if (stderr) {
   console.error(`Build stderr: ${stderr}`);
   return;
 }
 console.log(`Build stdout: ${stdout}`);
});