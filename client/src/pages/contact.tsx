import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { COMPANY_INFO } from "@/lib/constants";

const contactFormSchema = z.object({
  firstName: z.string().min(1, "Le prénom est requis"),
  lastName: z.string().min(1, "Le nom est requis"),
  email: z.string().email("Email invalide"),
  company: z.string().optional(),
  product: z.string().optional(),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères")
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      product: "",
      message: ""
    }
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message envoyé !",
        description: "Nous vous répondrons dans les plus brefs délais.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi du message.",
      });
    }
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  return (
    <main className="min-h-screen" data-testid="page-contact">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-r from-ocean-very-dark to-ocean-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 
            className="text-4xl md:text-6xl font-montserrat font-800 mb-6"
            data-testid="text-contact-title"
          >
            Contactez-nous
          </h1>
          <p 
            className="text-xl md:text-2xl font-roboto max-w-3xl mx-auto"
            data-testid="text-contact-subtitle"
          >
            Demandez un devis ou obtenez plus d'informations sur nos services
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-ocean-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-lg" data-testid="card-contact-form">
              <CardHeader>
                <CardTitle className="text-xl font-montserrat font-700 text-ocean-very-dark">
                  Demande de devis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Prénom *</FormLabel>
                            <FormControl>
                              <Input 
                                {...field} 
                                data-testid="input-firstname"
                                className="focus:ring-ocean-medium focus:border-ocean-medium"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nom *</FormLabel>
                            <FormControl>
                              <Input 
                                {...field} 
                                data-testid="input-lastname"
                                className="focus:ring-ocean-medium focus:border-ocean-medium"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email *</FormLabel>
                          <FormControl>
                            <Input 
                              type="email" 
                              {...field} 
                              data-testid="input-email"
                              className="focus:ring-ocean-medium focus:border-ocean-medium"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Entreprise</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              data-testid="input-company"
                              className="focus:ring-ocean-medium focus:border-ocean-medium"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="product"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Produit d'intérêt</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-product">
                                <SelectValue placeholder="Sélectionner un produit" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="poissons-nobles">Poissons nobles</SelectItem>
                              <SelectItem value="crustaces">Crustacés</SelectItem>
                              <SelectItem value="coquillages">Coquillages</SelectItem>
                              <SelectItem value="equipements">Équipements aquaculture</SelectItem>
                              <SelectItem value="services">Services logistiques</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message *</FormLabel>
                          <FormControl>
                            <Textarea 
                              {...field} 
                              rows={4}
                              data-testid="textarea-message"
                              className="focus:ring-ocean-medium focus:border-ocean-medium"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-ocean-medium hover:bg-ocean-bright text-white"
                      disabled={contactMutation.isPending}
                      data-testid="button-submit-contact"
                    >
                      {contactMutation.isPending ? "Envoi en cours..." : "Envoyer la demande"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="shadow-lg" data-testid="card-contact-info">
                <CardHeader>
                  <CardTitle className="text-xl font-montserrat font-700 text-ocean-very-dark">
                    Informations de contact
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center" data-testid="contact-phone">
                      <Phone className="w-6 h-6 text-ocean-medium mr-4" />
                      <div>
                        <p className="font-roboto font-500 text-gray-900">Téléphone</p>
                        <p className="text-gray-600">{COMPANY_INFO.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-center" data-testid="contact-email">
                      <Mail className="w-6 h-6 text-ocean-medium mr-4" />
                      <div>
                        <p className="font-roboto font-500 text-gray-900">Email</p>
                        <p className="text-gray-600">{COMPANY_INFO.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center" data-testid="contact-address">
                      <MapPin className="w-6 h-6 text-ocean-medium mr-4" />
                      <div>
                        <p className="font-roboto font-500 text-gray-900">Siège social</p>
                        <p className="text-gray-600">Zone Portuaire, Cotonou, Bénin</p>
                      </div>
                    </div>
                    <div className="flex items-center" data-testid="contact-hours">
                      <Clock className="w-6 h-6 text-ocean-medium mr-4" />
                      <div>
                        <p className="font-roboto font-500 text-gray-900">Horaires</p>
                        <p className="text-gray-600">Lun-Ven: 8h-18h, Sam: 8h-12h</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-lg" data-testid="card-social-media">
                <CardHeader>
                  <CardTitle className="text-xl font-montserrat font-700 text-ocean-very-dark">
                    Suivez-nous
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <a 
                      href="#" 
                      className="bg-ocean-medium hover:bg-ocean-bright text-white p-3 rounded-lg transition-colors duration-200"
                      data-testid="link-social-twitter"
                      aria-label="Twitter"
                    >
                      <FaTwitter className="w-6 h-6" />
                    </a>
                    <a 
                      href="#" 
                      className="bg-ocean-medium hover:bg-ocean-bright text-white p-3 rounded-lg transition-colors duration-200"
                      data-testid="link-social-linkedin"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin className="w-6 h-6" />
                    </a>
                    <a 
                      href="#" 
                      className="bg-ocean-medium hover:bg-ocean-bright text-white p-3 rounded-lg transition-colors duration-200"
                      data-testid="link-social-instagram"
                      aria-label="Instagram"
                    >
                      <FaInstagram className="w-6 h-6" />
                    </a>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    Restez informé de nos actualités et innovations dans le domaine de la pêche durable
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
