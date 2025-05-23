import {
  CalendarIcon,
  EditIcon,
  HomeIcon,
  PlusIcon,
  SearchIcon,
  Trash2Icon,
  UserIcon,
} from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "../../components/ui/dialog";
import { Label } from "../../components/ui/label";

export const HomePage = (): JSX.Element => {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "Sophie Martin",
      relation: "Daughter",
      image: "https://c.animaapp.com/CwoeiJZI/img/mask-group@2x.png",
    },
    {
      id: 2,
      name: "Lucas Bernard",
      relation: "Partner",
      image: "https://c.animaapp.com/CwoeiJZI/img/mask-group-1@2x.png",
    },
  ]);

  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editingContact, setEditingContact] = useState<{
    id: number;
    name: string;
    relation: string;
  } | null>(null);

  const handleEditClick = (contact: {
    id: number;
    name: string;
    relation: string;
  }) => {
    setEditingContact(contact);
    setIsEditDialogOpen(true);
  };

  const handleSaveEdit = () => {
    if (editingContact) {
      setContacts(
        contacts.map((c) => (c.id === editingContact.id ? editingContact : c))
      );
      setIsEditDialogOpen(false);
      setEditingContact(null);
    }
  };

  const popularSalons = [
    {
      id: 1,
      name: "Salon Élégance",
      services: "Coiffure, Manucure, Soins",
      rating: 4.5,
      reviews: 128,
    },
  ];

  return (
    <div className="flex flex-col h-screen w-full bg-white overflow-hidden">
      <header className="w-full h-[65px] bg-white border-b border-gray-100 flex items-center justify-between px-4">
        <div className="w-10 h-10" />
        <div className="font-extrabold italic text-gray-800 text-4xl tracking-[-1.00px]">
          STYLE
        </div>
        <Button variant="default" className="w-10 h-10 bg-gray-900 rounded-lg p-0">
          <UserIcon className="w-4 h-[18px]" />
        </Button>
      </header>

      <div className="flex-1 overflow-y-auto">
        <div className="w-full h-[204px] bg-gray-700 flex flex-col items-center justify-center px-[18px] py-[34px]">
          <div className="text-white text-2xl text-center mb-2">
            Réserve en ligne
          </div>
          <div className="text-white text-[15px] text-center mb-4">
            Simple • Instantané • 24/7
          </div>
          <div className="relative w-[286px]">
            <Input className="w-full h-12 bg-white rounded-lg shadow pl-10" placeholder="Nom du salon ou type de prestation..." />
            <SearchIcon className="absolute w-4 h-4 top-4 left-4 text-[#adaebc]" />
          </div>
        </div>

        <div className="px-3.5 mt-6">
          <h2 className="text-gray-800 text-xl mb-4">Salons populaires</h2>
          {popularSalons.map((salon) => (
            <Card key={salon.id} className="w-full h-[110px] mb-4 bg-gray-100 rounded-2xl border-0">
              <CardContent className="p-4 h-full flex items-center">
                <div className="w-16 h-16 bg-gray-300 rounded-lg flex items-center justify-center mr-4">
                  <div className="text-center text-white text-xs">Salon image</div>
                </div>
                <div>
                  <div className="text-gray-800 text-base mb-2">{salon.name}</div>
                  <div className="text-gray-600 text-sm mb-2">{salon.services}</div>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <img key={i} className="w-3.5 h-3 mr-0.5" alt="Star rating" src={`https://c.animaapp.com/CwoeiJZI/img/frame-${i + 6}.svg`} />
                    ))}
                    <span className="ml-2 text-gray-600 text-xs">({salon.reviews})</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="px-5 mt-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-gray-900 text-xl">Mes Contacts</h2>
            <Button variant="default" className="bg-gray-900 rounded-lg shadow">
              <PlusIcon className="w-3 h-3.5 mr-1" />
              <span className="text-sm">Add a New Contact</span>
            </Button>
          </div>
          {contacts.map((contact) => (
            <Card key={contact.id} className="w-full h-[100px] mb-4 bg-white rounded-2xl border shadow">
              <CardContent className="p-4 h-full flex items-center">
                <Avatar size="md" className="mr-4">
                  <AvatarImage src={contact.image} alt={contact.name} />
                  <AvatarFallback>{contact.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-grow">
                  <div className="text-gray-900 text-base mb-1">{contact.name}</div>
                  <div className="text-gray-500 text-xs">{contact.relation}</div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="bg-white rounded-lg border px-2 py-1" onClick={() => handleEditClick(contact)}>
                    <EditIcon className="w-3.5 h-3.5 mr-1" />
                    <span className="text-xs">Edit</span>
                  </Button>
                  <Button variant="outline" size="sm" className="bg-gray-100 rounded-lg border border-[#ebe5e5] px-2 py-1">
                    <Trash2Icon className="w-3 h-3.5 mr-1" />
                    <span className="text-xs text-gray-700">Delete</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-[90vw] sm:max-w-[420px] rounded-xl shadow-lg">
          <DialogHeader>
            <DialogTitle className="text-center text-lg font-semibold">Edit Contact</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">Name</Label>
              <Input id="name" value={editingContact?.name || ""} onChange={(e) => setEditingContact(prev => prev ? { ...prev, name: e.target.value } : null)} className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="relation" className="text-right">Relation</Label>
              <Input id="relation" value={editingContact?.relation || ""} onChange={(e) => setEditingContact(prev => prev ? { ...prev, relation: e.target.value } : null)} className="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" onClick={handleSaveEdit} className="w-full bg-gray-900 text-white rounded-md">
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
