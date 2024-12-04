
export const Footer = () => (
    <footer className="border-t bg-background w-full max-w-3xl mx-auto text-center my-16 px-4">
      <div className="container flex flex-col items-center gap-4 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; 2024 {" "}
            <a
              href="https://scostadavid.dev"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
              >
              scostadavid
            </a>
            . All rights reserved.{" "}
          </p>
        </div>
      </div>
    </footer>
  );