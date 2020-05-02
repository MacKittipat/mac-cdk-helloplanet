import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as apiGateway from '@aws-cdk/aws-apigateway';

export class MacCdkHelloplanetStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const functionName = 'HelloPlanet';
    const lambdaFunction = new lambda.Function(this, functionName, {
      runtime: lambda.Runtime.NODEJS_12_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset('resources'),
    });

    const gatewayRestApi = new apiGateway.RestApi(this, functionName + 'Api', {
      restApiName: functionName + 'Api',
      deployOptions: {
        stageName: 'prod'
      }
    })

    const gatewayLambdaIntegration = new apiGateway.LambdaIntegration(lambdaFunction, {
      allowTestInvoke: false
    });

    const gatewayResource = gatewayRestApi.root.addResource(functionName);
    gatewayResource.addMethod("GET", gatewayLambdaIntegration)

  }
}
