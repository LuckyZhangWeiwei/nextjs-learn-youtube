route groups
36:50 error handle error boundaries must be client components
39:30 loading ui
41:07 data fetching
      内容固定且不频繁更改 → SSG
      内容需要定期更新 → ISR
      内容需要实时动态更新 → SSR
      需要高度动态交互 → CSR
      PPR
59:30 generateMetadata

http://localhost:3000/studio
http://localhost:3000/


sanity 生成自己的typescript 类
npx sanity@latest schema extract --path=./sanity/extract.json
在根目录增加sanity-typegen.json 文件
npx sanity@latest typegen generate