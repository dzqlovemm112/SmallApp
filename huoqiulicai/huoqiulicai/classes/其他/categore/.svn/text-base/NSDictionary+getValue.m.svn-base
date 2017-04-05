//
//  NSDictionary+getValue.m
//  24小助理
//
//  Created by mac on 16/9/23.
//  Copyright © 2016年 zhtxwl_hx. All rights reserved.
//

#import "NSDictionary+getValue.h"

@implementation NSDictionary (getValue)

-(NSString *)getStringWithKey:(NSString *)key{
    
    if ([[self valueForKey:key] isNull] || ![self valueForKey:key]) {
        return @"";
    }else{
        return
        [[self valueForKey:key] isKindOfClass:[NSString class]] ?
        [self valueForKey:key]  :
        [NSString stringWithFormat:@"%@",[self valueForKey:key]] ;
    }
}
- (NSArray *)getArrayWithKey:(NSString *)key{
    if ([[self valueForKey:key] isNull]) {
        return [[NSArray alloc] init];
    }else{
        return [[self valueForKey:key] isKindOfClass:[NSArray class]] ? [self valueForKey:key] : [[NSArray alloc] init];
    }
}
- (NSDictionary *)getDictionArrayWithKey:(NSString *)key{
    if ([[self valueForKey:key] isNull]) {
        return [[NSDictionary alloc] init];
    }else{
        return [[self valueForKey:key] isKindOfClass:[NSDictionary class]] ? [self valueForKey:key] : [[NSDictionary alloc] init];
    }
}

- (CGFloat)getFloatWithKey:(NSString *)key{
    if ([[self valueForKey:key] isNull]) {
        return 0;
    }else{
        return [[self valueForKey:key] floatValue];
//        return [[self valueForKey:key] isKindOfClass:[NSNumber class]] ? [[self valueForKey:key] floatValue]: 0;
    }

}
- (NSString *)jsonStringWithDic{
  
        NSError *parseError = nil;
        
        NSData *jsonData = [NSJSONSerialization dataWithJSONObject:self options:NSJSONWritingPrettyPrinted error:&parseError];
        
        return [[NSString alloc] initWithData:jsonData encoding:NSUTF8StringEncoding];

}

@end
