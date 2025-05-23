import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { CalendarIcon, XIcon, MessageCircle } from 'lucide-react';

export const AppointmentsPage = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.fromConfirmation) {
      console.log("User redirected from confirmation page");
    }
  }, [location]);

  const appointments = [
    {
      id: 1,
      salonName: "Salon Élégance",
      service: "Classic Haircut",
      stylist: "Alice Martin",
      date: "13 May 2025, 13:00",
      image: "Salon"
    },
    {
      id: 2,
      salonName: "Studio Coiffure",
      service: "Balayage",
      stylist: "Emma L.",
      date: "24 May 2025, 10:30",
      image: "https://c.animaapp.com/CwoeiJZI/img/mask-group-1@2x.png"
    },
    {
      id: 3,
      salonName: "Barber House",
      service: "Beard Trim",
      stylist: "Marc D.",
      date: "31 May 2025, 18:00",
      image: "Salon"
    }
  ];

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header STYLE centré */}
      <header className="bg-white p-4 flex justify-center items-center border-b border-gray-200">
        <h1 className="text-2xl font-bold">STYLE</h1>
      </header>

      <div className="flex-1 overflow-y-auto p-4">
        {/* Tabs */}
        <div className="flex mb-4">
          <Button
            variant={activeTab === 'upcoming' ? 'default' : 'outline'}
            className="mr-2"
            onClick={() => setActiveTab('upcoming')}
          >
            Upcoming
          </Button>
          <Button
            variant={activeTab === 'past' ? 'default' : 'outline'}
            onClick={() => setActiveTab('past')}
          >
            Past
          </Button>
        </div>

        {/* Appointments */}
        <div className="space-y-4">
          {appointments.map((appointment) => (
            <Card key={appointment.id} className="w-full">
              <CardContent className="p-4">
                <div className="flex items-center min-w-0">
                  <div className="w-12 h-12 bg-gray-300 rounded-lg flex items-center justify-center mr-4 shrink-0">
                    {appointment.image === "Salon" ? (
                      <span className="text-xs text-white text-center">Salon img</span>
                    ) : (
                      <img src={appointment.image} alt={appointment.salonName} className="w-full h-full object-cover rounded-lg" />
                    )}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold truncate">{appointment.salonName}</h3>
                    <p className="text-sm text-gray-600 truncate">{appointment.service} · {appointment.stylist}</p>
                    <p className="text-sm text-gray-600 truncate">{appointment.date}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-4 w-full">
                  <Button variant="outline" className="flex items-center justify-center text-sm px-2 py-1 space-x-1">
                    <CalendarIcon className="w-4 h-4" />
                    <span>Reschedule</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex items-center justify-center text-sm px-2 py-1 space-x-1"
                    onClick={() => navigate('/chat')}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Chat</span>
                  </Button>
                  <Button variant="outline" className="flex items-center justify-center text-sm px-2 py-1 space-x-1">
                    <XIcon className="w-4 h-4" />
                    <span>Cancel</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
