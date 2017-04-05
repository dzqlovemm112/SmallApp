//
//  HTAlertManager.h
//  24小助理
//
//  Created by mac on 16/5/26.
//  Copyright © 2016年 zhtxwl_hx. All rights reserved.
//
typedef void (^blockAlertViewCallBackBlock)(NSUInteger btnIndex);

#import <Foundation/Foundation.h>

@interface HTAlertManager : NSObject<UIAlertViewDelegate,UIActionSheetDelegate>

- (void)showAlertWithTitle:(NSString *)title msg:(NSString *)msg callbackBlock:(blockAlertViewCallBackBlock)block
         cancelButtonTitle:(NSString *)cancelBtnTitle otherButtonTitles:(NSString *)otherButtonTitles, ...  ;

- (void)showActionSheetWithTitle:(NSString *)title  callbackBlock:(blockAlertViewCallBackBlock)block
         cancelButtonTitle:(NSString *)cancelBtnTitle otherButtonTitles:(NSString *)otherButtonTitles, ... ;

@end
