//
//  HTAlertManager.m
//  24小助理
//
//  Created by mac on 16/5/26.
//  Copyright © 2016年 zhtxwl_hx. All rights reserved.
//

#import "HTAlertManager.h"

@implementation HTAlertManager
{
    blockAlertViewCallBackBlock _callbackBlock;
}
- (void)showAlertWithTitle:(NSString *)title msg:(NSString *)msg callbackBlock:(blockAlertViewCallBackBlock)block
         cancelButtonTitle:(NSString *)cancelBtnTitle otherButtonTitles:(NSString *)otherButtonTitles, ... ;
{
    if (!block)
    {
        return;
    }
    
    _callbackBlock = nil;
    //强引用
    _callbackBlock = [block copy];
    

    
    UIAlertView *alert = [[UIAlertView alloc] initWithTitle:title message:msg delegate:self cancelButtonTitle:cancelBtnTitle otherButtonTitles:nil];
    if (otherButtonTitles)
    {
        [alert addButtonWithTitle:otherButtonTitles];
        va_list args ;
        va_start(args, otherButtonTitles);
        NSString *title = nil;
        while ((title = va_arg(args, NSString *)))
        {
            [alert addButtonWithTitle:title];
        }
        va_end(args);
    }
    
    [alert show];
}



- (void)showActionSheetWithTitle:(NSString *)title callbackBlock:(blockAlertViewCallBackBlock)block cancelButtonTitle:(NSString *)cancelBtnTitle otherButtonTitles:(NSString *)otherButtonTitles, ...{
    if (!block)
    {
        return;
    }
    _callbackBlock = nil;
    //强引用
    _callbackBlock = [block copy];
    
    UIActionSheet *sheet = [[UIActionSheet alloc] initWithTitle:title delegate:self cancelButtonTitle:cancelBtnTitle destructiveButtonTitle:nil otherButtonTitles:nil];
    if (otherButtonTitles) {
        [sheet addButtonWithTitle:otherButtonTitles];
        va_list args ;
        va_start(args, otherButtonTitles);
        NSString *title = nil;
        while ((title = va_arg(args, NSString *)))
        {
            [sheet addButtonWithTitle:title];
        }
        va_end(args);
    }
    
    [sheet showInView:[[UIApplication sharedApplication].delegate window].rootViewController.view];
}
- (void)alertView:(UIAlertView *)alertView clickedButtonAtIndex:(NSInteger)buttonIndex;
{
    _callbackBlock(buttonIndex);
    
}
- (void)actionSheet:(UIActionSheet *)actionSheet clickedButtonAtIndex:(NSInteger)buttonIndex{
    
    _callbackBlock(buttonIndex);
    
}


@end
