import { useState } from "react";
import { Listbox } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { IoChevronDownSharp } from "react-icons/io5";

export default function ExampleListbox({
  items = [
    "Default - USD",
    "Nigerian Naira - NGN",
    "GBP - British Pounds",
    "ZAR",
  ],
  onChange,
}) {
  const [selected, setSelected] = useState(items[0]);



  const handleChange = (e) => {
setSelected(e)
onChange?.(e)
  }

  return (
    <div className="w-full flex flex-col">
      <Listbox value={selected} onChange={handleChange}>
        <div className="relative">
          <Listbox.Button className="relative w-full cursor-default h-12.5 inputs px-5 text-left ring-2 ring-primary-red ">
            <span className="block truncate">{selected}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <IoChevronDownSharp
                className="h-5 w-5 text-primary-black"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>

          <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto bg-white py-1 shadow-lg focus:outline-none">
            {items.map((person, id) => (
              <Listbox.Option
                key={id}
                value={person}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? "bg-red-100 text-red-900" : "text-gray-900"
                  }`
                }
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {person}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-red-600">
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );
}
