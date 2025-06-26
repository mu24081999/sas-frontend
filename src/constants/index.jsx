import {
  ChartColumn,
  Home,
  NotepadText,
  Package,
  PackagePlus,
  Settings,
  ShoppingCart,
  UserCheck,
  UserPlus,
  Users,
  Megaphone,
  DollarSign,
  Briefcase,
} from "lucide-react";

import { format } from "date-fns";

export const navbarLinks = [
  {
    title: "Dashboards",
    links: [
      {
        path: "superadmin-dashboard",
        label: "Dashboard",
        icon: Users,
        roles: ["superadmin"],
      },
      {
        path: "admin-dashboard",
        label: "Dashboard",
        icon: Users,
        roles: ["admin"],
      },
      {
        path: "agent-dashboard",
        label: "Dashboard",
        icon: Users,
        roles: ["agent"],
      },
    ],
  },
  {
    title: "Management",
    links: [
      {
        path: "admins",
        label: "Admins",
        icon: Users,
        roles: ["superadmin"],
      },
      {
        path: "agents",
        label: "Agents",
        icon: Users,
        roles: ["superadmin", "admin"],
      },
    ],
  },
  {
    title: "Campaigns",
    links: [
      {
        path: "home-warranty",
        label: "Home Warranty",
        icon: DollarSign,
        roles: ["superadmin", "admin", "agent"],
      },
      {
        path: "auto-warranty-leads",
        label: "Auto Warranty Leads",
        icon: Briefcase,
        roles: ["superadmin", "admin", "agent"],
      },
      {
        path: "auto-warranty-sales",
        label: "Auto Warranty Sales",
        icon: Megaphone,
        roles: ["superadmin", "admin", "agent"],
      },
    ],
  },
];

export const salesColumns = [
  { key: "customerName", header: "Customer" },
  { key: "primaryPhone", header: "Primary Phone" },
  { key: "campaignType", header: "Campaign Type" },
  {
    key: "agentName",
    header: "Agent",
    render: (_, sale) => sale.agent?.name || sale.agentName || "-",
  },
  { key: "confirmationNumber", header: "Confirmation Number" },
  { key: "planName", header: "Plan Name" },
  { key: "address", header: "Address" },
  { key: "email", header: "Email" },
  {
    key: "activationFee",
    header: "Activation Fee",
    render: (value) => (value ? `$${value.toFixed(2)}` : "-"),
  },
  { key: "paymentMode", header: "Payment Mode" },
  { key: "bankName", header: "Bank Name" },
  { key: "chequeOrCardNumber", header: "Check or Card Number" },
  { key: "cvv", header: "CVV" },
  { key: "expiryDate", header: "Expiry Date" },
  { key: "merchantName", header: "Merchant Name" },
  { key: "checkingAccountNumber", header: "Checking Account Number" },
  { key: "routingNumber", header: "Routing Number" },
  { key: "alternativePhone", header: "Alternative Phone" },
  {
    key: "dateOfSale",
    header: "Date of Sale",
    render: (value) => (value ? format(new Date(value), "PP") : "-"),
  },
];

export const autoWarrantySalesColumns = [
  { key: "customerName", header: "Customer" },
  { key: "primaryPhone", header: "Primary Phone" },
  { key: "vinNumber", header: "VIN Number" },
  {
    key: "agentName",
    header: "Agent",
    render: (_, sale) => sale.agent?.name || sale.agentName || "-",
  },
  {
    key: "confirmationNumber",
    header: "Confirmation Number",
    render: (value) => value || "-",
  },
  { key: "vehicleModel", header: "Vehicle Model" },
  { key: "address", header: "Address", render: (value) => value || "-" },
  { key: "email", header: "Email", render: (value) => value || "-" },
  {
    key: "activationFee",
    header: "Activation Fee",
    render: (value) => (value ? `$${value.toFixed(2)}` : "-"),
  },
  {
    key: "paymentMode",
    header: "Payment Mode",
    render: (value) => value || "-",
  },
  { key: "bankName", header: "Bank Name", render: (value) => value || "-" },
  {
    key: "chequeOrCardNumber",
    header: "Check or Card Number",
    render: (value) => value || "-",
  },
  { key: "cvv", header: "CVV", render: (value) => value || "-" },
  {
    key: "expiryDate",
    header: "Expiry Date",
    render: (value) => value || "-",
  },
  {
    key: "vehicleMileage",
    header: "Vehicle Mileage",
    render: (value) => (value ? `${value.toLocaleString()} miles` : "-"),
  },
  {
    key: "planName",
    header: "Plan Name",
    render: (value) => value || "-",
  },
  {
    key: "fronterName",
    header: "Fronter Name",
    render: (value) => value || "-",
  },
  {
    key: "closerName",
    header: "Closer Name",
    render: (value) => value || "-",
  },
  {
    key: "checkingAccountNumber",
    header: "Checking Account Number",
    render: (value) => value || "-",
  },
  {
    key: "routingNumber",
    header: "Routing Number",
    render: (value) => value || "-",
  },
  {
    key: "alternativePhone",
    header: "Alternative Phone",
    render: (value) => value || "-",
  },
  {
    key: "dateOfSale",
    header: "Date of Sale",
    render: (value) => (value ? format(new Date(value), "PP") : "-"),
  },
];

export const leadColumns = [
  {
    key: "dateOfSale",
    header: "Date of Sale",
    render: (value) => (value ? format(new Date(value), "PP") : "-"),
  },
  { key: "customerName", header: "Customer Name" },
  {
    key: "agentName",
    header: "Agent",
    render: (_, lead) => lead.agent?.name || lead.agentName || "-",
  },
  { key: "primaryPhone", header: "Primary Phone Number" },
  {
    key: "vehicleMileage",
    header: "Vehicle Mileage",
    render: (value) => (value ? `${value.toLocaleString()} miles` : "-"),
  },
  {
    key: "extendedWarranty",
    header: "Extended Warranty Options",
    render: (value) => value || "-",
  },
  {
    key: "customerAgreedForTransferToSeniorRepresentative",
    header: "Agreed to Transfer",
    render: (value) => (value ? "Yes" : "No"),
  },
  { key: "email", header: "Email", render: (value) => value || "-" },
  {
    key: "vehicleMakeModelVariant",
    header: "Vehicle Make Model & Variant",
    render: (value) => value || "-",
  },
  { key: "address", header: "Address", render: (value) => value || "-" },
  { key: "dialerName", header: "Dialer", render: (value) => value || "-" },
];
