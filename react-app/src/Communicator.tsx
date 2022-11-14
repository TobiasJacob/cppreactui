import React, { useContext } from "react";
import { Demo } from "./ice/Printer";

export const CommunicatorContext = React.createContext<any | undefined>(undefined);

function LocalCommunicator(props: {children: React.ReactNode}) {
    const communicator = window.Ice.initialize();

    const hostname = document.location.hostname || "127.0.0.1";
    console.log(hostname)
    const proxy = communicator.stringToProxy(`SimplePrinter:ws -h ${hostname} -p 10000`);

    return <CommunicatorContext.Provider value={proxy}>
        {props.children}
    </CommunicatorContext.Provider>
}

export function usePrinterCallback<R>(callback: (printer: Demo.PrinterPrx) => Promise<R>): () => Promise<R> {
const proxy = useContext(CommunicatorContext);
  return async () => {
    const printer = await window.Demo.PrinterPrx.checkedCast(proxy!);
    return callback(printer!);
  };
}


export default LocalCommunicator;
