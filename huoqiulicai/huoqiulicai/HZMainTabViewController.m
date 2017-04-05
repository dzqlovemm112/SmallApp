//
//  HZMainTabViewController.m
//  huoqiulicai
//
//  Created by mac on 2016/12/13.
//  Copyright © 2016年 huoqiu. All rights reserved.
//
#import "HTMainViewController.h"
#import "HZDiscoverViewController.h"
#import "HZMainTabViewController.h"
#import "HZMeViewController.h"
#import "HZLiCaiViewController.h"
#import "HTBaceNavigationController.h"

@interface HZMainTabViewController ()

@end

@implementation HZMainTabViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    HTMainViewController *vc = [[HTMainViewController alloc] init];
    vc.tabBarItem = [[UITabBarItem alloc] initWithTitle:@"首页" image:[UIImage imageNamed:@"home"] selectedImage:[UIImage imageNamed:@"home_on"]];
    [vc.tabBarItem setImageInsets:UIEdgeInsetsMake(6, 0, -6, 0)];
     HZLiCaiViewController*vc2 = [[HZLiCaiViewController alloc] init];
    vc2.tabBarItem = [[UITabBarItem alloc] initWithTitle:@"理财" image:[UIImage imageNamed:@"store"] selectedImage:[UIImage imageNamed:@"store_on"]];
    [vc2.tabBarItem setImageInsets:UIEdgeInsetsMake(6, 0, -6, 0)];
    HZDiscoverViewController *vc3 = [[HZDiscoverViewController alloc] init];
    vc3.tabBarItem = [[UITabBarItem alloc] initWithTitle:@"发现" image:[UIImage imageNamed:@"discover"] selectedImage:[UIImage imageNamed:@"discover_on"]];
    [vc3.tabBarItem setImageInsets:UIEdgeInsetsMake(6, 0, -6, 0)];
    
    HZMeViewController *vc4 = [[HZMeViewController alloc] init];
    vc4.tabBarItem = [[UITabBarItem alloc] initWithTitle:@"我的" image:[UIImage imageNamed:@"discover"] selectedImage:[UIImage imageNamed:@"discover_on"]];
    [vc4.tabBarItem setImageInsets:UIEdgeInsetsMake(6, 0, -6, 0)];
    
    NSArray *  arr = @[vc,vc2,vc3,vc4];
    NSMutableArray *controls = [NSMutableArray array];
    for (int  i = 0 ; i < arr.count ; i++) {
        HTBaceNavigationController *nav = [[HTBaceNavigationController alloc] initWithRootViewController:arr[i]];
        [controls addObject:nav];
    }
    self.viewControllers = controls;
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}


@end
