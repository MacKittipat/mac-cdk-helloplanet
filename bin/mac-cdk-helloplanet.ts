#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import {MacCdkHelloplanetStack} from '../lib/mac-cdk-helloplanet-stack';

const app = new cdk.App();
new MacCdkHelloplanetStack(app, 'MacCdkHelloplanetStack', {
    env: {
        region: 'ap-southeast-1'
    }
});
