//unions types (OR)

type Status = "pending" | "success" | "reject";

const setStatus = (status: string): void => {
  console.log(`status set to :${status}`);
};
// setStatus("approved")

// intersection types (AND)
interface Colorfull {
  color: string;
}
interface Circle {
  raduis: number;
}
type ColorFullCircle = Colorfull & Circle;
let myCircle: ColorFullCircle = {
  color: "Red",
  raduis: 6,
};

/** ############  Literal  types ############3*/
let direction: "north" | "south" | "east" | "west";
direction="east"


/** ############  Numeric Literal  types ############3*/
let diceRoll:1|2|3|4|5|6
diceRoll=4

/** ############  Combine with other types ############3*/
type SuccessResponse={
    status:"success",
    data:any
}
type ErrorResponse={
    status:"error",
    data:string
}

type ApiResponse=SuccessResponse|ErrorResponse
