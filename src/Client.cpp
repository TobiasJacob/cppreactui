#include <Ice/Ice.h>
#include <Printer.h>
#include <stdexcept>
 
using namespace std;
using namespace Demo;
 
int
main(int argc, char* argv[])
{
    cout << "Client" << endl;
    try
    {
        Ice::CommunicatorHolder ich(argc, argv);
        auto base = ich->stringToProxy("SimplePrinter:ws -h 127.0.0.1 -p 10000");
        auto printer = Ice::checkedCast<PrinterPrx>(base);
        if(!printer)
        {
            throw std::runtime_error("Invalid proxy");
        }
 
        printer->printString("Hello World!");
    }
    catch(const std::exception& e)
    {
        cerr << e.what() << endl;
        return 1;
    }
    return 0;
}