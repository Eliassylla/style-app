import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import {
  Dialog,
  DialogTrigger,
  DialogContent
} from "../../components/ui/dialog";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue
} from "../../components/ui/select";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { UserIcon, Check, CreditCard, Edit, Trash2 } from "lucide-react";

export const ConfirmationPage = (): JSX.Element => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);
  const [cardDetails, setCardDetails] = useState({
    firstName: "",
    lastName: "",
    cardNumber: "",
    expiryDate: "",
    cvc: "",
  });
  const [cardAdded, setCardAdded] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [paymentError, setPaymentError] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<{ [key: string]: boolean }>({});

  const appointment = {
    salonName: "Salon Élégance",
    address: "12 Rue de la Beauté, Paris",
    service: "Classic Haircut",
    duration: "30 min",
    price: "25€",
    date: "Mar 13 mai 2025, 13:00",
    professional: "Alice Martin",
  };

  const handleCardDetailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCardDetails((prev) => ({ ...prev, [name]: value }));
    setFieldErrors((prev) => ({ ...prev, [name]: false }));
  };

  const handleAddCard = () => {
    const errors: { [key: string]: boolean } = {};
    Object.entries(cardDetails).forEach(([key, value]) => {
      if (!value.trim()) errors[key] = true;
    });

    if (Object.keys(errors).length === 0) {
      setPaymentMethod("card");
      setCardAdded(true);
      setIsDialogOpen(false);
      setPaymentError(false);
    } else {
      setFieldErrors(errors);
    }
  };

  const handleReserve = () => {
    if (!paymentMethod) {
      setPaymentError(true);
    } else {
      navigate('/appointments', { state: { fromConfirmation: true } });
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <header className="bg-white p-4 flex justify-between items-center">
        <Button variant="ghost" className="p-2" onClick={() => navigate(-1)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </Button>
        <h1 className="text-2xl font-bold">STYLE</h1>
        <Button variant="ghost" className="p-2 bg-gray-900 rounded-lg">
          <UserIcon className="w-6 h-6 text-white" />
        </Button>
      </header>

      <div className="flex-1 overflow-y-auto p-4">
        <h2 className="text-2xl font-bold mb-6">Confirmer le rendez-vous</h2>

        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Your payment methods</h3>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              {(paymentMethod === "cash" || cardAdded) ? (
                <Button className="bg-green-500 hover:bg-green-600 text-white">
                  <Check className="mr-2 h-4 w-4" />
                  {paymentMethod === "cash" ? "Sur place" : "Card "}
                </Button>
              ) : (
                <Button
                  variant="outline"
                  className={`text-sm px-4 py-2 border ${paymentError ? "border-red-500 text-red-600" : "border-gray-300 text-gray-900"}`}
                  onClick={() => setIsDialogOpen(true)}
                >
                  + Add Payment Method{paymentError && ' *'}
                </Button>
              )}
            </DialogTrigger>
            <DialogContent className="w-[95vw] max-w-md sm:w-full rounded-xl">
              <div className="space-y-4">
                <Label htmlFor="payment-method">Payment Method</Label>
                <Select onValueChange={(value) => setPaymentMethod(value)}>
                  <SelectTrigger id="payment-method">
                    <SelectValue placeholder="Select a payment method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="card">Card</SelectItem>
                    <SelectItem value="cash">Sur place</SelectItem>
                  </SelectContent>
                </Select>

                {paymentMethod === "card" && (
                  <div className="space-y-2">
                    <div className="grid gap-2">
                      <Label htmlFor="firstName" className={fieldErrors.firstName ? "text-red-600" : ""}>
                        First Name{fieldErrors.firstName && " *"}
                      </Label>
                      <Input id="firstName" name="firstName" value={cardDetails.firstName} onChange={handleCardDetailChange} className={fieldErrors.firstName ? "border border-red-500" : ""} />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="lastName" className={fieldErrors.lastName ? "text-red-600" : ""}>
                        Last Name{fieldErrors.lastName && " *"}
                      </Label>
                      <Input id="lastName" name="lastName" value={cardDetails.lastName} onChange={handleCardDetailChange} className={fieldErrors.lastName ? "border border-red-500" : ""} />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="cardNumber" className={fieldErrors.cardNumber ? "text-red-600" : ""}>
                        Card Number{fieldErrors.cardNumber && " *"}
                      </Label>
                      <Input id="cardNumber" name="cardNumber" value={cardDetails.cardNumber} onChange={handleCardDetailChange} className={fieldErrors.cardNumber ? "border border-red-500" : ""} />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="expiryDate" className={fieldErrors.expiryDate ? "text-red-600" : ""}>
                          Exp.{fieldErrors.expiryDate && " *"}
                        </Label>
                        <Input id="expiryDate" name="expiryDate" value={cardDetails.expiryDate} onChange={handleCardDetailChange} className={fieldErrors.expiryDate ? "border border-red-500" : ""} />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="cvc" className={fieldErrors.cvc ? "text-red-600" : ""}>
                          CVC{fieldErrors.cvc && " *"}
                        </Label>
                        <Input id="cvc" name="cvc" value={cardDetails.cvc} onChange={handleCardDetailChange} className={fieldErrors.cvc ? "border border-red-500" : ""} />
                      </div>
                    </div>

                    <Button className="mt-4 bg-gray-900 text-white w-full" onClick={handleAddCard}>Add Card</Button>
                  </div>
                )}
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {!cardAdded && paymentMethod !== "cash" && (
          <div className="flex items-center mb-6 p-4 bg-gray-100 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
            <span className="text-gray-600">No payment methods saved</span>
          </div>
        )}

        {cardAdded && (
          <div className="mb-6 p-4 bg-white rounded-lg shadow">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <CreditCard className="h-6 w-6 mr-2 text-blue-500" />
                <span className="font-semibold">VISA</span>
              </div>
              <div>
                <Button variant="ghost" className="p-1 mr-2">
                  <Edit className="h-4 w-4" />
                </Button>
                <Button variant="ghost" className="p-1">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <p className="text-gray-600">**** **** **** {cardDetails.cardNumber.slice(-4)}</p>
            <p className="text-gray-600">Exp. {cardDetails.expiryDate}</p>
          </div>
        )}

        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-300 rounded-lg flex items-center justify-center mr-4">
                <span className="text-xs text-white text-center">Image salon</span>
              </div>
              <div>
                <h3 className="font-semibold">{appointment.salonName}</h3>
                <p className="text-sm text-gray-600">{appointment.address}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div><p className="text-sm text-gray-600">Service</p><p className="font-semibold">{appointment.service}</p></div>
              <div><p className="text-sm text-gray-600">Durée</p><p className="font-semibold">{appointment.duration}</p></div>
              <div><p className="text-sm text-gray-600">Prix</p><p className="font-semibold">{appointment.price}</p></div>
              <div><p className="text-sm text-gray-600">Date & heure</p><p className="font-semibold">{appointment.date}</p></div>
              <div className="col-span-2">
                <p className="text-sm text-gray-600">Professionnel</p>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mr-2">
                    <UserIcon className="w-4 h-4 text-white" />
                  </div>
                  <p className="font-semibold">{appointment.professional}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <Button variant="outline" className="w-full" onClick={() => navigate(-1)}>
            Modifier la sélection
          </Button>
          <Button
            className={`w-full ${paymentError ? "border border-red-500 text-red-600 bg-white" : "bg-gray-900 text-white"}`}
            onClick={handleReserve}
          >
            Réserver{paymentError && ' *'}
          </Button>
        </div>
      </div>
    </div>
  );
};
