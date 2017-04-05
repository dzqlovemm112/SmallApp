//
//  HTAccountTool.m
//  shengyijing
//
//  Created by mac on 16/3/9.
//  Copyright © 2016年 zhtxwl_hx. All rights reserved.
//

#import "HTAccountTool.h"
#import "AppDelegate.h"
#import "HTShareClass.h"




@implementation HTAccountTool



+ (BOOL)isLogined{
    
    NSString *DDNAME = [[NSUserDefaults standardUserDefaults] objectForKey:@"DDNAME"];
    NSString *DDPWD = [[NSUserDefaults standardUserDefaults] objectForKey:@"DDPWD"];
    //账户好密码登录
    if (DDNAME.length!=0 && DDPWD.length !=0 ){
        return YES;
    }else{
        return NO;
    }
}

+ (void)exitLogin{
    
    
   
    NSString *DDPWD = [[NSUserDefaults standardUserDefaults] objectForKey:@"DDPWD"];
    NSString *loginUid = [[NSUserDefaults standardUserDefaults] objectForKey:@"LoginUid"];

    if (DDPWD.length !=0 ){
        [[NSUserDefaults standardUserDefaults] setObject:nil forKey:@"DDPWD"];
        [[NSUserDefaults standardUserDefaults] synchronize];//强制User Defaults系统进行保存
    }
    if([NSString stringWithFormat:@"%@",loginUid].length != 0){
        
        [[NSUserDefaults standardUserDefaults] setObject:nil forKey:@"LoginUid"];
        [[NSUserDefaults standardUserDefaults] synchronize];//强制User Defaults系统进行保存
     
    }
    
}
/**
 *用户注册点击完成，以及自动登录选择控制器
 *
 */
#pragma mark - 用户注册点击完成，以及自动登录选择控制器
+(void)choiceVC {

  
    //dzq add 判断是否三方是否显示
    if ([HTAccountTool isLogined]) {
//         跳转到首页   同时做网络请求
           //    取出用户信息
        Account *uAccount = [self getAccout];
       [self loginDoSomeThing:^(id json){
           //    第一版简单布局

//           第二版布局
           [self createViewControllerWithjson:(id)json];
           [HTAccountTool cheackUnionId];
       } WithAccount:uAccount];
    
        
    } else { // 没有登录过
//        跳转登录界面
    
    }
    
}
/**
 *  取出用户
 *
 *  @return 用户信息
 */
+ (Account *) getAccout{
 
    NSString *DDNAME = [[NSUserDefaults standardUserDefaults] objectForKey:@"DDNAME"];
    NSString *DDPWD = [[NSUserDefaults standardUserDefaults] objectForKey:@"DDPWD"];
    
    NSString *DDSNB  = [[NSUserDefaults standardUserDefaults] objectForKey:@"DDSNB"];
    
    //    生成用户
    Account *uAccount = [[Account alloc] init];
    uAccount.userName = DDNAME;
    uAccount.passWord = DDPWD;
    uAccount.shopNumber = DDSNB;

    return uAccount;
}

//暂时没用
/**
 *  布局登录后的界面
 */
+ (void) createViewControllerWithjson:(id)json{
    
}
/**
 *  登录
 *
 *  @param succes  登录成功后的操作，根据未登录和已登录做出改变
 *  @param account 用户信息
 */
+ (void)loginDoSomeThing:(loginSucces)succes WithAccount:(Account *)account{
   
    
    NSString *DDRGID = [[[NSUserDefaults standardUserDefaults] objectForKey:@"DDRGID"] length] > 0 ?
    [[NSUserDefaults standardUserDefaults] objectForKey:@"DDRGID"] : @"";
    
    
    [HTHttpTools POST:nil params:nil success:^(id json) {
        [MBProgressHUD hideHUD];
        NSDictionary *dataDic = json;
        
        //        存储用户信息
        [[NSUserDefaults standardUserDefaults] setObject:account.userName forKey:@"DDNAME"];
        [[NSUserDefaults standardUserDefaults] setObject:account.passWord forKey:@"DDPWD"];
        [[NSUserDefaults standardUserDefaults] setObject:account.shopNumber forKey:@"DDSNB"];
        //储存登陆记录
        NSMutableArray *shopNums = [[[NSUserDefaults standardUserDefaults] objectForKey:@"DDSNBArr"] mutableCopy];
        
        !succes ? : succes(json);
        
    } error:^{
        [MBProgressHUD hideHUD];
        [MBProgressHUD showError:@"服务器正忙"];
        
        //        跳转登录界面
       
    } failure:^(NSError *error) {
         [MBProgressHUD hideHUD];
        [MBProgressHUD showError:@"请检查你的网络"];
       
        //        跳转登录界面
      
    }];
}



/**
 *  应用从后台切换到前台来的操作
 *
 *  @param fail 登录失败后的操作
 */
+ (void)loginWillEnterForeground:(loginFail) fail Succes:(loginSucces) succes
{
    
    NSString *DDRGID = [[[NSUserDefaults standardUserDefaults] objectForKey:@"DDRGID"] length] > 0 ?
    [[NSUserDefaults standardUserDefaults] objectForKey:@"DDRGID"] : @"";
    
    //    取出用户信息
    Account *account = [self getAccout];
    
    if (account.passWord.length == 0 ) {
        return;
    }
       [HTHttpTools GET:nil params:nil success:^(id json) {
        [MBProgressHUD hideHUD];
       
        
        //        存储用户信息
        [[NSUserDefaults standardUserDefaults] setObject:account.userName forKey:@"DDNAME"];
        [[NSUserDefaults standardUserDefaults] setObject:account.passWord forKey:@"DDPWD"];
        [[NSUserDefaults standardUserDefaults] setObject:account.shopNumber forKey:@"DDSNB"];
        //储存登陆记录
               !succes ? : succes(json);
        
    } error:^{
        [MBProgressHUD hideHUD];
        [MBProgressHUD showError:@"服务器忙"];
        //        跳转登录界面
      
    } failure:^(NSError *error) {
        [MBProgressHUD hideHUD];
        [MBProgressHUD showError:@"请检查你的网络"];
        //        跳转登录界面
      
        
    }];
}


@end
