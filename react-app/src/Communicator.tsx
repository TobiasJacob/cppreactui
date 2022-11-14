import React, { useContext } from "react";

export const CommunicatorContext = React.createContext<any | undefined>(undefined);

function LocalCommunicator(props: {children: React.ReactNode}) {
    // const communicator = Ice.initialize();

    // const hostname = document.location.hostname || "127.0.0.1";
    // console.log(hostname)
    // const proxy = communicator.stringToProxy(`SimplePrinter:ws -h ${hostname} -p 10000`);

    // return <CommunicatorContext.Provider value={proxy}>
    //     {props.children}
    // </CommunicatorContext.Provider>
}

// function usePrinterCallback<R, A>(callback: (printer: Demo.PrinterPrx, args: A) => Promise<R>): (args: A) => Promise<R> {
// const proxy = useContext(CommunicatorContext);
//   return async (args) => {
//     const printer = await Demo.PrinterPrx.checkedCast(proxy!);
//     return callback(printer!, args);
//   };
// }


export default LocalCommunicator;
