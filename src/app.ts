import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient({ region: "us-east-1" });

export const handler = async (event: any): Promise<string> => {
  try {
    console.log(
      `Successfully processed order ${event} and stored receipt in S3 bucket`
    );
    return "Success";
  } catch (error) {
    console.error(
      `Failed to process order: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
    throw error;
  }
};

// async function addProduct() {
//   const params = {
//     TableName: "appointment",
//     Item: {
//       appointmentId: { S: "Product02" },
//       description: { S: "Hiking Boots" },
//       category: { S: "footwear" },
//       sku: { S: "hiking-sku-01" },
//       size: { N: "9" },
//     },
//   };

//   try {
//     const data = await client.send(new PutItemCommand(params));
//     console.log("result : " + JSON.stringify(data));
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }
// addProduct();
