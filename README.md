# koiutalyric

あっ！パンダの赤ちゃん歩いたよ！乳飲児行脚(ちのみごあんぎゃ)だよ

## How to deploy

* This app uses GitHub Actions in order to deploy to Cloudflare Workers.
* 2 credentials needs to be configured in `Actions secrets and variables` -> `New secret`
  * Obtain the below from [Cloudflare dashboard](https://dash.cloudflare.com/profile/api-tokens/)
  * `CLOUDFLARE_API_TOKEN`
  * `CLOUDFLARE_ACCOUNT_ID`

* 3 credentials needs to be configured using `wrangler secret put`
  * `DISCORD_APPLICATION_ID`
  * `DISCORD_PUBLIC_KEY`
  * `DISCORD_TOKEN`

* Interactions Endpoint URL should be your URL of app on Cloudflare Workers (e.g. `https://foo.bar.workers.dev/`)
  * You can set this from `Discord Developer Portal` -> `General Information`

## License

The MIT License
