import { MyPortableProduct } from '../lib/my-portable-product-stack';
import * as cdk from '@aws-cdk/core';
import * as path from 'path';
import * as fs from 'fs';
import * as YAML from 'yaml';

/**
 * Demonstrate synthesizing the CDK stack as a plain CloudFormation template
 * `npm run synth:product`
 */

const app = new cdk.App();
new MyPortableProduct(app, 'my-product');

const output = app.synth();
const outStack = output.stacks[0];

const templatePath = path.resolve('./cdk.out/template.yaml')
fs.writeFileSync(templatePath, YAML.stringify(outStack.template));