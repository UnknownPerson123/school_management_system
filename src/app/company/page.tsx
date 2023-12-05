import React from "react";
import AddProductModal from "@/app/components/AddProductModal";
import Search from "@/app/components/Search";
import List from "@/app/components/List";
import { prisma } from "@/utils/database";

const getCompanies = async () => {
  return prisma.company.findMany();
};

const CompanyPage = async () => {
  const companies = await getCompanies();
  return (
    <main>
      <section className="container mx-auto relative ">
        <div className=" absolute right-0">
          <AddProductModal />
        </div>
      </section>
      <section className="container mx-auto my-3 p-4">
        <Search type="Company" />
      </section>
      <section className="container mx-auto my-4">
        <List type="Companies" data={companies} />
      </section>
    </main>
  );
};

export default CompanyPage;
