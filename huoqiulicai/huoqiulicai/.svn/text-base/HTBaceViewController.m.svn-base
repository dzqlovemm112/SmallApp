//
//  HTBaceViewController.m
//  shengyijing
//
//  Created by mac on 16/3/9.
//  Copyright © 2016年 zhtxwl_hx. All rights reserved.
//
#import "HTBaceViewController.h"
#import "AFNetworking.h"
#import "HTBaceNavigationController.h"

#define timeStandar 5

@interface HTBaceViewController ()<UIGestureRecognizerDelegate>
{
    
    UIView * backView;
}
@end

@implementation HTBaceViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
    if ([self cheackIsNeedShowGuide]){
        [self showGuideView];
    }
    
    [[NSUserDefaults standardUserDefaults] setObject:NSStringFromClass([self class]) forKey:@"lastView"];
    HTBaceNavigationController *nav = (id)self.navigationController;
    nav.isChange = NO;
    
    [self.navigationController.navigationBar setTitleTextAttributes:@{NSForegroundColorAttributeName:[UIColor whiteColor]}];
    [self.navigationController.navigationBar setBarTintColor:RGB(0.98, 0.34, 0.26, 1)];
    self.navigationItem.rightBarButtonItem.tintColor = [UIColor whiteColor];
    //导航条不透明self.view.backgroundColor = RGB(0.96, 0.96, 0.98, 1);
    self.navigationController.navigationBar.translucent = NO;
    self.view.backgroundColor = RGB(0.96, 0.96, 0.98, 1);
    self.navigationController.interactivePopGestureRecognizer.delegate = (id)self;

    [self checkNetWork];

}
//判断是否需要暂时guide
- (BOOL)cheackIsNeedShowGuide{
    NSString *versionKey = (__bridge NSString *)kCFBundleVersionKey;

    NSString * lastDate = [[NSUserDefaults standardUserDefaults] objectForKey:[NSString stringWithFormat:@"%@%@",[NSBundle mainBundle].infoDictionary[versionKey],NSStringFromClass(self.class)]];
    if (lastDate.length == 0 ) {
        NSDate *nowDate = [NSDate dateWithTimeIntervalSinceNow:0];
        NSTimeInterval nowTime = [nowDate timeIntervalSince1970];
        [[NSUserDefaults standardUserDefaults] setObject:[NSString stringWithFormat:@"%.0lf",nowTime] forKey:[NSString stringWithFormat:@"%@%@",[NSBundle mainBundle].infoDictionary[versionKey],NSStringFromClass(self.class)]];
        return YES;
    }else{
        double lastTime = [lastDate doubleValue];
        NSDate *nowDate = [NSDate dateWithTimeIntervalSinceNow:0];
        NSTimeInterval nowTime = [nowDate timeIntervalSince1970];
        
        if ((nowTime - lastTime) >= timeStandar * 86400) {
            NSDate *nowDate = [NSDate dateWithTimeIntervalSinceNow:0];
            NSTimeInterval nowTime = [nowDate timeIntervalSince1970];
            [[NSUserDefaults standardUserDefaults] setObject:[NSString stringWithFormat:@"%.0lf",nowTime] forKey:[NSString stringWithFormat:@"%@%@",[NSBundle mainBundle].infoDictionary[versionKey],NSStringFromClass(self.class)]];

            return YES;
        }else{
            return NO;
        }
    }
}
- (void)showGuideView{
    
}
- (void)viewWillAppear:(BOOL)animated{
    [super viewWillAppear:animated];
   
    
}

#pragma mark - 检测网络
- (void)checkNetWork{
    AFNetworkReachabilityManager *manager = [AFNetworkReachabilityManager sharedManager];
    [manager startMonitoring];
    [manager setReachabilityStatusChangeBlock:^(AFNetworkReachabilityStatus status) {
        /*
         AFNetworkReachabilityStatusUnknown 未知
         AFNetworkReachabilityStatusNotReachable 没有
         AFNetworkReachabilityStatusReachableViaWWAN 要钱
         AFNetworkReachabilityStatusReachableViaWiFi 不要钱
         */
        switch (status) {
            case AFNetworkReachabilityStatusUnknown:
            {
                
            }
                break;
            case AFNetworkReachabilityStatusNotReachable:
            {
                //没有网络
                [self showAVwithString:@"当前没有网络,请检查您的网络状态!"];
            }
                break;
            case AFNetworkReachabilityStatusReachableViaWWAN:
            {
                //[self showAVwithString:@"您使用的是3G/4G,需要花钱,确定继续吗?"];
            }
                break;
            case AFNetworkReachabilityStatusReachableViaWiFi:
            {
                //[self showAVwithString:@"您使用的是wifi"];
            }
                break;
            default:
                break;
        }
    }];
}
- (void)showAVwithString:(NSString *)str{
    UIAlertView *av = [[UIAlertView alloc] initWithTitle:@"提 示" message:str delegate:nil cancelButtonTitle:@"确 定" otherButtonTitles:nil, nil];
    [av show];
}

- (void)showAlaetWithTitle:(NSString *) title andMsg:(NSString *)msg  cancelString:(NSString *)cancel otherButtonTitles:(NSString *) titles{
    
    UIAlertView *av = [[UIAlertView alloc] initWithTitle:title message:msg delegate:self cancelButtonTitle:cancel otherButtonTitles:titles, nil];
    
    [av show];
    
    
}


- (void)dealloc{

}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
}

#pragma mark - @protocol YYKeyboardObserver

@end
