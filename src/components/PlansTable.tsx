
import React from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Plan = {
  slNo?: string | number;
  planName: string;
  price: string;
  fupData?: string;
  maxSpeed?: string;
  postFupSpeed?: string;
  ottPack?: string;
  specialBenefits?: string;
  ottServices?: string;
};

type PlansTableProps = {
  title: string;
  description?: string;
  plans: Plan[];
  columns: string[];
  isOttPlans?: boolean;
};

const PlansTable = ({ title, description, plans, columns, isOttPlans = false }: PlansTableProps) => {
  return (
    <div className="rounded-lg overflow-hidden border border-gray-200 shadow-md">
      <Table>
        <TableCaption>{description}</TableCaption>
        <TableHeader>
          <TableRow className="bg-gray-100">
            {columns.map((column, index) => (
              <TableHead key={index} className="font-semibold text-gray-900">
                {column}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {plans.map((plan, index) => (
            <TableRow 
              key={index}
              className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
            >
              {columns.includes('Sl No') && (
                <TableCell>{plan.slNo}</TableCell>
              )}
              <TableCell className="font-medium">{plan.planName}</TableCell>
              <TableCell className="font-semibold">₹{plan.price}</TableCell>
              
              {columns.includes('FUP Data') && plan.fupData && (
                <TableCell>{plan.fupData}</TableCell>
              )}
              
              {columns.includes('Max Speed') && plan.maxSpeed && (
                <TableCell>{plan.maxSpeed}</TableCell>
              )}
              
              {columns.includes('OTT Pack') && plan.ottPack && (
                <TableCell>{plan.ottPack}</TableCell>
              )}
              
              {columns.includes('Post-FUP Speed') && plan.postFupSpeed && (
                <TableCell>{plan.postFupSpeed}</TableCell>
              )}
              
              {columns.includes('Special Benefits') && plan.specialBenefits && (
                <TableCell>{plan.specialBenefits}</TableCell>
              )}
              
              {columns.includes('OTT Services Included') && plan.ottServices && (
                <TableCell>{plan.ottServices}</TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PlansTable;
