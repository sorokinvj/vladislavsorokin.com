export const Footer: React.FC = () => (
  <footer className="bg-neutral-50 w-full">
    <div className="py-20 grid-container md:max-w-4xl md:mx-auto">
      <div className="col-span-3 md:col-span-8">
        <p className="font-title text-4xl text-darkgrey mb-8">
          Vladislav Sorokin
        </p>
        <p className="text-darkgrey font-sans text-base leading-6">
          You can find me on{" "}
          <a href="twitter.com/sorokinvj" rel="noopener noreferrer">
            Twitter
          </a>
          ,{" "}
          <a href="github.com/sorokinvj" rel="noopener noreferrer">
            GitHub
          </a>{" "}
          or email me at{" "}
          <a href="mailto:sorokinvj@gmail.com">sorokinvj@gmail.com</a>
        </p>
      </div>
    </div>
  </footer>
);
