import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import { useState } from "react";
import { Button } from "@nextui-org/react";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import Payment from "../components/ProductPayment";

export default function Product() {
  const [selectedType, setselectedType] = useState("b1/b2");
  const [selectedPackage, setSelectedPackage] = useState("standard");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const pricing = {
    standard: 19.99,
    premium: 49.99,
  };

  const packageContent = {
    standard: "Visa Consultation, Document Preparation, Application Submission",
    premium:
      "Visa Consultation, Document Preparation, Application Submission, Follow-up Services, Appeal Assistance",
  };

  return (
    <div className="flex flex-col items-center gap-y-3 my-3 w-full">
      <div className="grid grid-cols-1 gap-y-3 lg:items-start lg:grid-cols-2 lg:gap-x-3">
        <img src="/productImg.jpg" alt="product" className="flex-1" />
        <div className="flex flex-col gap-y-3">
          <h2 className="font-bold lg:text-lg">
            U.S. Visa Consulating Package
          </h2>
          <p className="text-sm text-slate-400">
            Start exploring the professional visa application consultancy
            services we offer.
          </p>
          <div className="flex flex-col gap-y-3">
            <p className="font-bold text-sm">Select visa type</p>
            <Breadcrumbs
              size="sm"
              onAction={(key) => setselectedType(key)}
              classNames={{
                list: "gap-2",
              }}
              itemClasses={{
                item: [
                  "px-4 py-2 border-small border-default-400 rounded-small",
                  "data-[current=true]:border-foreground data-[current=true]:bg-background data-[current=true]:text-foreground transition-colors",
                ],
                separator: "hidden",
              }}
            >
              <BreadcrumbItem key="b1/b2" isCurrent={selectedType === "b1/b2"}>
                B1/B2
              </BreadcrumbItem>
              <BreadcrumbItem key="h1b" isCurrent={selectedType === "h1b"}>
                H1B
              </BreadcrumbItem>
              <BreadcrumbItem key="f1" isCurrent={selectedType === "f1"}>
                F1
              </BreadcrumbItem>
              <BreadcrumbItem key="h4" isCurrent={selectedType === "h4"}>
                H4
              </BreadcrumbItem>
            </Breadcrumbs>
          </div>
          <div className="flex flex-col gap-y-3">
            <p className="font-bold text-sm">Select service package</p>
            <Breadcrumbs
              size="sm"
              onAction={(key) => setSelectedPackage(key)}
              classNames={{
                list: "gap-2",
              }}
              itemClasses={{
                item: [
                  "px-4 py-2 border-small border-default-400 rounded-small",
                  "data-[current=true]:border-foreground data-[current=true]:bg-background data-[current=true]:text-foreground transition-colors",
                ],
                separator: "hidden",
              }}
            >
              <BreadcrumbItem
                key="standard"
                isCurrent={selectedPackage === "standard"}
              >
                Standard
              </BreadcrumbItem>
              <BreadcrumbItem
                key="premium"
                isCurrent={selectedPackage === "premium"}
              >
                Premium
              </BreadcrumbItem>
            </Breadcrumbs>
          </div>
          <p className="text-sm">{`What's included:`}</p>
          <p className="text-xs max-w-[400px]">
            {packageContent[selectedPackage]}
          </p>
          <p className="font-bold text-xl">{`CAD$ ${pricing[selectedPackage]}`}</p>
          <div className="flex flex-col gap-y-3">
            <Button
              color="primary"
              className="border-2"
              startContent={<MdOutlineShoppingCartCheckout size={20} />}
              onPress={onOpen}
            >
              Checkout
            </Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader>Checkout</ModalHeader>
                    <ModalBody>
                      <p>Use the following method to make payment:</p>
                      <Payment />
                      <p>
                        Email{" "}
                        <span className="text-blue-400 underline underline-offset-2">
                          support@usvisa.lol
                        </span>{" "}
                        after your payment is processed
                      </p>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="primary" onPress={onClose}>
                        Confirm
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-y-3 border">
        <p>
          Our company specializes in offering comprehensive and professional
          visa application consultancy services. We are dedicated to assisting
          individuals and businesses in securing various types of visas.
        </p>
        <p>
          <strong>Visa Consultation: </strong>We provide expert advice on the
          visa application process, eligibility criteria, and required
          documentation for different types of visas, including tourist visas,
          business visas, student visas, work visas, and family visas.
        </p>
        <p>
          <strong>Document Preparation: </strong>We assist clients in preparing
          and organizing all necessary documents for their visa application,
          ensuring that they meet the specific requirements of the U.S. Visa.
        </p>
        <p>
          <strong>Application Submission: </strong>We guide clients through the
          process of submitting their visa application, including online
          applications and appointments for biometric data collection.
        </p>
        <p>
          <strong>Follow-up Services:</strong> We keep clients informed about
          the status of their application and provide support in case of any
          queries or additional requirements from the consulates.
        </p>
        <p>
          <strong>Appeal Assistance:</strong> In case of visa rejection, we
          offer guidance on the appeal process and help clients prepare a strong
          case for reconsideration.
        </p>
        <p>
          Our commitment is to provide a seamless and stress-free visa
          application experience for our clients, ensuring that they receive the
          best possible support throughout the process.
        </p>
      </div>
    </div>
  );
}
