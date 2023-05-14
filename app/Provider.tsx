"use client";

import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

// server componentは内部でuseStateを使用しているので、ChakuraProviderをClient Compnentとして扱うように、
// "use client"を宣言したファイルでラップする必要がある
// ただし、それだけでは、UIコンポーネントを使用するファイルごとに"use client"を宣言しなければならない
// それを回避するためん、app/common/components/index.tsxにまとめてエクスポートする
// そうすることで、"import { Button } from "./common/components"でChakura UIが使用できる
export default function Provider({ children }: { children: React.ReactNode }) {
  return <ChakraProvider>{children}</ChakraProvider>;
}
