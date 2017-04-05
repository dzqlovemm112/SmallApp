//
//  HTHttpTools.h
//  shengyijing
//
//  Created by mac on 16/3/9.
//  Copyright © 2016年 zhtxwl_hx. All rights reserved.
//

#import <Foundation/Foundation.h>

typedef void (^XMGRequestSuccess)(id json);
typedef void (^XMGRequestFailure)(NSError *error);

typedef void(^HTRequestError)();
@interface HTHttpTools : NSObject

+ (NSURLSessionDataTask *)GET:(NSString *)url params:(NSDictionary *)params success:(XMGRequestSuccess)success error:(HTRequestError) error failure:(XMGRequestFailure)failure;

+ (void)POST:(NSString *)url params:(NSDictionary *)params success:(XMGRequestSuccess)success error:(HTRequestError) error failure:(XMGRequestFailure)failure;


@end
