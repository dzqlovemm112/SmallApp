//
//  HTShareClass.m
//  shengyijing
//
//  Created by mac on 16/3/16.
//  Copyright © 2016年 zhtxwl_hx. All rights reserved.
//

#import "HTShareClass.h"

@implementation HTShareClass

static HTShareClass *instance = nil;

+ (HTShareClass *)shareClass{
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
        if (!instance) {
            instance = [[HTShareClass alloc] init];
        }
    });
    
    return instance;
}

- (HTAlertManager *)alertManager{
    if (!_alertManager) {
        _alertManager = [[HTAlertManager alloc] init];
    }
    return _alertManager;
}


@end
