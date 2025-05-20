import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import Link from "next/link";

import { RxChevronRight } from "react-icons/rx";

type ListProps = {
  url: string;
  title: string;
  date: string;
  badge: string;
  button: ButtonProps;
};

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  lists: ListProps[];
};

export type StackedList2Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const StackedList2 = (props: StackedList2Props) => {
  const { heading, description, buttons, lists } = {
    ...StackedList2Defaults,
    ...props,
  };

  return (
    <section id="relume">
      <div className="pb-5 md:pb-6 mt-20">
        <div className="grid grid-cols-1 items-end gap-4 md:grid-cols-[1fr_max-content] md:gap-6">
          <div className="w-full max-w-lg">
            <h2 className="text-2xl font-bold">{heading}</h2>
            <p className="mt-2">{description}</p>
          </div>
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-wrap gap-4">
              {buttons.map((button, index) => (
                <Link key={index} href="/vault/create">
                  <Button {...button} className=" px-2 rounded-md">{button.title}</Button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border-primary">
        {lists.map((list, index) => (
          <a key={index} href={list.url} className="grid max-w-full grid-cols-1 gap-6 border-b border-border-primary py-4 md:grid-cols-[1fr_max-content]">
            <div className="w-full max-w-lg">
              <h3 className="font-semibold">{list.title}</h3>
              <p className="text-sm">{list.date}</p>
            </div>
            <div className="flex items-center justify-between gap-4">
              <h4 className="flex items-center justify-center bg-background-secondary px-3 py-0.5 text-sm font-medium">{list.badge}</h4>
              <Button {...list.button} className="border border-border-alternative p-2" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export const StackedList2Defaults: Props = {
  heading: "Suas senhas",
  description: "",
  buttons: [
    {
      title: "Cadastrar",
      variant: "secondary",
      size: "sm",
    },
  ],
  lists: [
    {
      url: "#",
      title: "Task name",
      date: "Created on June 20, 2023",
      badge: "Complete",
      button: {
        variant: "tertiary",
        iconRight: <RxChevronRight />,
      },
    },
    {
      url: "#",
      title: "Task name",
      date: "Created on June 20, 2023",
      badge: "Complete",
      button: {
        variant: "tertiary",
        iconRight: <RxChevronRight />,
      },
    },
    {
      url: "#",
      title: "Task name",
      date: "Created on June 20, 2023",
      badge: "Complete",
      button: {
        variant: "tertiary",
        iconRight: <RxChevronRight />,
      },
    },
    {
      url: "#",
      title: "Task name",
      date: "Created on June 20, 2023",
      badge: "Complete",
      button: {
        variant: "tertiary",
        iconRight: <RxChevronRight />,
      },
    },
  ],
};
