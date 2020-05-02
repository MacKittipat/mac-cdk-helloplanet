import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as MacCdkHelloplanet from '../lib/mac-cdk-helloplanet-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new MacCdkHelloplanet.MacCdkHelloplanetStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
