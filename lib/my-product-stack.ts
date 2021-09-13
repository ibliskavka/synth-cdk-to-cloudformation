import {Construct, Stack, StackProps} from '@aws-cdk/core';
import {Bucket, CfnBucket} from '@aws-cdk/aws-s3';

interface MyProductProps extends StackProps {
  client: string;
}

/**
 * Implements the CDK app. This is abstract because build steps should be ran separately
 */
export abstract class MyProductBase extends Stack {
  constructor(scope: Construct, id: string) {
    super(scope, id);
  }

  // Separate build step from constructor to allow inheriting stack to add properties.
  protected build(props: MyProductProps) {

    const stack = props.env || Stack.of(this);
    const bucketName = `${stack.account}-${stack.region}-${props.client}`;

    const bucket = new Bucket(this, 'Bucket', {
      bucketName: bucketName
    });
    (bucket.node.defaultChild as CfnBucket).overrideLogicalId('Bucket');
  }
}

/**
 * A simple wrapper over MyProductBase so that we have the standard CDK experience.
 */
export class MyProduct extends MyProductBase {
  constructor(scope: Construct, id: string, props: MyProductProps) {
    super(scope, id);
    this.build(props);
  }
}
