import { useState } from "react";
import {
  Button,
  Input,
  Modal,
  Toast,
  Loader
} from "../components/ui";


function ComponentDemo() {

  const [open, setOpen] = useState(false);


  return (
    <div className="p-8 space-y-6">

      <h1 className="text-3xl font-bold">
        UI Component Demo
      </h1>


      <div>
        <h2>Button</h2>

        <Button
          onClick={() => alert("Button clicked")}
        >
          Analyze Review
        </Button>

      </div>


      <div>

        <h2>Input</h2>

        <Input
          placeholder="Enter guest review"
        />

      </div>



      <div>

        <h2>Modal</h2>

        <Button
          onClick={() => setOpen(true)}
        >
          Open Modal
        </Button>


        <Modal
          isOpen={open}
          title="Review Analysis"
          onClose={() => setOpen(false)}
        >

          AI analysis result appears here.

        </Modal>

      </div>



      <div>

        <h2>Toast</h2>

        <Toast
          message="Review analyzed successfully"
        />

      </div>



      <div>

        <h2>Loader</h2>

        <Loader />

      </div>


    </div>
  );
}


export default ComponentDemo;