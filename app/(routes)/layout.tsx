"use client"
import Footer from "@/components/Footer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TonConnectUIProvider } from "@tonconnect/ui-react";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div
        className={`bg-black flex w-full flex-col h-[100dvh]`}
      >
        <ScrollArea className="flex-1 p-2">
        <TonConnectUIProvider manifestUrl="https://apricot-selected-dog-88.mypinata.cloud/ipfs/QmctrAry79UUPGx7CPHxptRNP4wVcR9SM7vEfdUjR5RPZU">
          {children}
          </TonConnectUIProvider>
        </ScrollArea>
        <Footer />
      </div>
  );
}
