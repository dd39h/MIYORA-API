
import {
  HttpClient,
  startServer,
  AllmangaProvider,
  GogoanimeProvider,
  GoyabuProvider,
  AnikotoProvider,
  MegaPlayProvider,
  AnimeParadiseProvider,
  MangadexProvider,
  WeebcentralProvider,
  MangapillProvider,
  AnilistMeta,
  MalMeta,
  KitsuMeta
} from './dist/index.js';

const http = new HttpClient({ timeoutMs: 25000 });
const store = new Map();

const cache = {
  get: (key) => store.get(key),
  set: (key, value) => store.set(key, value)
};

startServer({
  providers: [
    new AllmangaProvider(http),
    new GogoanimeProvider(http),
    new GoyabuProvider(http),
    new AnikotoProvider(http),
    new MegaPlayProvider(http),
    new AnimeParadiseProvider(http),
    new MangadexProvider(http),
    new WeebcentralProvider(http),
    new MangapillProvider(http)
  ],
  metaProviders: [
    new AnilistMeta(http),
    new MalMeta(http),
    new KitsuMeta(http)
  ],
  port: Number(process.env.PORT || 3000),
  proxy: true,
  proxySignSecret: process.env.PROXY_SECRET,
  cache
});
