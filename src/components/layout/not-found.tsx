"use client";

import Link from "next/link";

import { useLang } from "@/lib/language/components/language-provider";

import { Button } from "@/components/ui/button"
import { DefaultPage } from "@/components/layout/default-page";

export const NotFound = () => {
  const { dictionary } = useLang();

  return (
    <DefaultPage
      title={dictionary.pages.errors.notFound.title}
      description={dictionary.pages.errors.notFound.description}
    >
      <Link href="/">
        <Button>
          {dictionary.pages.errors.notFound.button}
        </Button>
      </Link>
    </DefaultPage>
  )
}