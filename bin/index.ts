import * as cdk from '@aws-cdk/core';
import { MyProduct } from '../lib/my-product-stack';

/**
 * Demonstrate using the stack the "CDK Way"
 */

const app = new cdk.App();
new MyProduct(app, 'my-product', {
  env: {
    account: '123456879123',
    region: 'us-east-1'
  },
  client: 'foo'
});

