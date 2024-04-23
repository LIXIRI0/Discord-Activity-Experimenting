import { DiscordSDK } from "@discord/embedded-app-sdk";
import "./style.css";
import rocketLogo from "/rocket.png";
const sdk = new DiscordSDK(import.meta.env.VITE_DISCORD_CLIENT_ID);

setupSdk().then(() => {
  console.log("Discord SDK is ready!");
});

async function setupSdk() {
  await sdk.ready();
}

document.querySelector("#app").innerHTML = `
  <div>
    <img src="${rocketLogo}" class="logo" alt="Discord" />
    <h1>!!TESTING!!</h1>
  </div>
`;
