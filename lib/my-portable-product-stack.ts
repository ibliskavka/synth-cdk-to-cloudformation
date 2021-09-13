import { Construct, CfnParameter } from '@aws-cdk/core';
import { MyProductBase } from './my-product-stack';

export class MyPortableProduct extends MyProductBase {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    // Add CloudFormation parameter
    const client = new CfnParameter(this, 'Client', {
      type: 'String',
      description: 'Used for naming'
    });

    // Build the base stack, using the client parameter as a string token
    this.build({
      client: client.valueAsString
    })
  }
}