"use client";

import React from "react";
import { siteConfig } from "@/lib/constants";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function AdminSettingsPage() {
  return (
    <div className="max-w-2xl space-y-6">
      <div>
        <h1 className="font-serif text-2xl sm:text-3xl font-semibold text-brand-text">
          Portal & Organisation Settings
        </h1>
        <p className="text-xs sm:text-sm text-brand-muted mt-1">
          Update primary business contact points, office location, and response guarantees.
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-brand-border p-6 sm:p-8 shadow-subtle space-y-4">
        <Input label="Organisation Name" defaultValue={siteConfig.name} />
        <Input label="Primary Advisory Phone" defaultValue={siteConfig.phone} />
        <Input label="Enquiries Email" defaultValue={siteConfig.email} />
        <Input label="Corporate Office Address" defaultValue={siteConfig.address} />
        <Input label="Working Hours" defaultValue={siteConfig.workingHours} />

        <div className="pt-4 flex justify-end">
          <Button variant="primary" size="md">
            Save System Settings
          </Button>
        </div>
      </div>
    </div>
  );
}
