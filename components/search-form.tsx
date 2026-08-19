"use client";

import Form from "next/form";
import { useSearchParams } from "next/navigation";

export default function SearchForm() {
  const searchParams = useSearchParams();

  const search = searchParams.get("search");

  console.log(search);

  return (
    <Form
      action="/"
      className="flex items-center justify-center bg-gray-600 min-h-10"
    >
      <input
        name="query"
        defaultValue=""
        className="outline-2 outline-amber-900"
      />
      <button type="submit" className="outline-2 py-1">
        Submit
      </button>
    </Form>
  );
}
