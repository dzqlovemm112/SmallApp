//
//  HTHttpTools.m
//  shengyijing
//
//  Created by mac on 16/3/9.
//  Copyright © 2016年 zhtxwl_hx. All rights reserved.
//
#import "AFNetworking.h"
#import "HTHttpTools.h"

@implementation HTHttpTools

+ (NSURLSessionDataTask *)GET:(NSString *)url params:(NSDictionary *)params success:(XMGRequestSuccess)success error:(HTRequestError) error  failure:(XMGRequestFailure)failure
{
   
     AFHTTPSessionManager *manager = [AFHTTPSessionManager manager];
    
    [manager setSecurityPolicy:[self customSecurityPolicy]];
    //申明返回的结果是json类型
    manager.responseSerializer = [AFJSONResponseSerializer serializer];
   
    //申明请求的数据是json类型
    manager.requestSerializer  = [AFJSONRequestSerializer new];
    [manager.requestSerializer setValue:@"APPRequest-IOS" forHTTPHeaderField:@"X-Requested-With"];
  
    
    manager.requestSerializer.timeoutInterval = 20.f;
    manager.responseSerializer.acceptableContentTypes = [NSSet setWithObjects:@"application/json",@"text/json", @"text/plain", @"text/html", nil];
    
    
    NSURLSessionDataTask *task =   [manager GET:url parameters:params progress:^(NSProgress * _Nonnull downloadProgress) {
    } success:^(NSURLSessionDataTask * _Nonnull task, id  _Nullable responseObject) {
               !success ? : success(responseObject);
    } failure:^(NSURLSessionDataTask * _Nullable task, NSError * _Nonnull error) {
         !failure ? : failure(error);
          }];
    return task;
}

+ (void)POST:(NSString *)url params:(NSDictionary *)params success:(XMGRequestSuccess)success error:(HTRequestError) error failure:(XMGRequestFailure)failure
{
    
    AFHTTPSessionManager *manager = [AFHTTPSessionManager manager];
    
//    [manager setSecurityPolicy:[self customSecurityPolicy]];
    //申明返回的结果是json类型
    manager.responseSerializer = [AFJSONResponseSerializer serializer];
    //申明请求的数据是json类型
    manager.requestSerializer  = [AFHTTPRequestSerializer serializer];
    [manager.requestSerializer setValue:@"APPRequest-IOS" forHTTPHeaderField:@"X-Requested-With"];
//    [manager.requestSerializer setValue:@"application/x-www-form-urlencoded" forHTTPHeaderField:@"Content-Type"];
  
    
    manager.requestSerializer.timeoutInterval = 20.f;
    
    manager.responseSerializer.acceptableContentTypes = [NSSet setWithObjects:@"application/json",@"text/json", @"text/plain", @"text/html", nil];
    
    [manager POST:url parameters:params progress:^(NSProgress * _Nonnull uploadProgress) {
        
    } success:^(NSURLSessionDataTask * _Nonnull task, id  _Nullable responseObject) {
                !success ? : success(responseObject);
    } failure:^(NSURLSessionDataTask * _Nullable task, NSError * _Nonnull error) {

         !failure ? : failure(error);
    }];
    
}
+ (AFSecurityPolicy*)customSecurityPolicy
{
    // /先导入证书
    NSString *cerPath = [[NSBundle mainBundle] pathForResource:@"ipipip" ofType:@"cer"];//证书的路径
    NSData *certData = [NSData dataWithContentsOfFile:cerPath];
    
    // AFSSLPinningModeCertificate 使用证书验证模式
    AFSecurityPolicy *securityPolicy = [AFSecurityPolicy policyWithPinningMode:AFSSLPinningModeCertificate];
    
    // allowInvalidCertificates 是否允许无效证书（也就是自建的证书），默认为NO
    // 如果是需要验证自建证书，需要设置为YES
    securityPolicy.allowInvalidCertificates = YES;
    
    //validatesDomainName 是否需要验证域名，默认为YES；
    //假如证书的域名与你请求的域名不一致，需把该项设置为NO；如设成NO的话，即服务器使用其他可信任机构颁发的证书，也可以建立连接，这个非常危险，建议打开。
    //置为NO，主要用于这种情况：客户端请求的是子域名，而证书上的是另外一个域名。因为SSL证书上的域名是独立的，假如证书上注册的域名是www.google.com，那么mail.google.com是无法验证通过的；当然，有钱可以注册通配符的域名*.google.com，但这个还是比较贵的。
    //如置为NO，建议自己添加对应域名的校验逻辑。
    securityPolicy.validatesDomainName = NO;
    
    securityPolicy.pinnedCertificates = [NSSet setWithObject:certData];
    
    return securityPolicy;
}
@end
