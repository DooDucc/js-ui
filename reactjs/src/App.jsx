import { Heading, Button, Wrapper } from "js-ui-clevai";

const App = () => {
  return (
    <>
      <Wrapper type="react" id="ducdc" className="dochiduc" pd={{ t: 20 }} mg={{ b: 40 }} bg="green4" br="9" w={400.5}>
        qweqe
      </Wrapper>
      <Heading type="react" tag="h2" font="semibold" color="green8" onClick={() => console.log("first")}>
        ducdc
      </Heading>
      <Button type="react" category="default" size="lg" color="otherRoyalBlue" onClick={() => console.log("first")}>
        ducdc
      </Button>
    </>
  );
};

export default App;
