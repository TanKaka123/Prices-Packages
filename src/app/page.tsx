"use client";
import { Button, Paragraph, Card, Input } from "@/components";
import { border } from "@/constants/component";
import { useModal } from "@/hooks/useModal";
import packagePrice from "@/data/packagesPrice.json";
import { Package } from "@/types/package";
import { useState } from "react";

export default function Home() {
  const [selectCPackage, setSelectPackage] = useState<Package | null>(null);
  const { isOpen, openModal, closeModal, ModalComponent } = useModal();

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between "
      style={{ width: "100vw", height: "100vh" }}
    >
      <div>
        {ModalComponent && selectCPackage && (
          <ModalComponent
            closeModal={closeModal}
            packageItem={selectCPackage}
          />
        )}
      </div>
      <div
        className="flex justify-around items-center"
        style={{ width: "100%" }}
      >
        {packagePrice &&
          packagePrice.map((itemPackage, indexPackage) => {
            const handleSelectCard = () => {
              setSelectPackage(itemPackage as Package);
              openModal();
            };
            return (
              <Card
                key={indexPackage}
                title={itemPackage.name}
                description={itemPackage.description}
                price={itemPackage.prices as number}
                thumbnail={itemPackage.thumbnail}
                onAction={handleSelectCard}
              />
            );
          })}
      </div>
    </main>
  );
}
