#include <Ice/Ice.h>
#include "Printer.h"

#include <memory>
 
using namespace std;
using namespace Demo;
 
class PrinterI : public Printer
{
public:
    virtual void printString(string s, const Ice::Current&) override;
    virtual string sendMeAText(const Ice::Current&) override;
};
 
void 
PrinterI::printString(string s, const Ice::Current&)
{
    cout << s << endl;
}

string 
PrinterI::sendMeAText(const Ice::Current&)
{
    return "Simple text from cpp";
}
 
int
main(int argc, char* argv[])
{
    try
    {
        cout << "Init" << endl;
        Ice::CommunicatorHolder ich(argc, argv);
        auto adapter = ich->createObjectAdapterWithEndpoints("SimplePrinterAdapter", "ws -h 0.0.0.0 -p 10000");
        auto servant = make_shared<PrinterI>();
        adapter->add(servant, Ice::stringToIdentity("SimplePrinter"));
        adapter->activate();
        ich->waitForShutdown();
    }
    catch(const std::exception& e)
    {
        cerr << e.what() << endl;
        return 1;
    }
    return 0;
}