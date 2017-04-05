//
//  CDMyWelcomeViewController.m
//  Exam
//
//  Created by 成都千锋 on 15/9/7.
//  Copyright (c) 2015年 HX. All rights reserved.
//

#import "CDMyWelcomeViewController.h"
#import "HZMainTabViewController.h"
#define WIDTH self.view.bounds.size.width

#define PAGH 4
@interface CDMyWelcomeViewController ()<UIScrollViewDelegate>
{
    UIScrollView * myScrollView;
     UIPageControl * pageControl;
}
@end

@implementation CDMyWelcomeViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    myScrollView = [[UIScrollView alloc] initWithFrame:CGRectMake(0, 0, WIDTH, HEIGHT)];
    myScrollView.contentSize = CGSizeMake(WIDTH * PAGH, HEIGHT);
    myScrollView.pagingEnabled = YES ;
    myScrollView.bounces = NO ;
    myScrollView.delegate = self ;
    for (int i = 1 ; i <= PAGH; i++) {
        UIImage * image = [UIImage imageNamed:[NSString stringWithFormat:@"walkthrough_%d.jpg",i]];
        UIImageView *imageView = [[UIImageView alloc] initWithImage:image];
        imageView.frame = CGRectMake(WIDTH * (i - 1), 0, WIDTH, HEIGHT);
    
        [myScrollView addSubview:imageView];
  
    }
    UIButton *myButton = [UIButton buttonWithType:UIButtonTypeSystem];
    myButton.frame = CGRectMake(WIDTH * 3 + WIDTH / 2 - 50 , HEIGHT - 120 , 100, 40);
    [myButton setTitle:@"进入体验" forState:UIControlStateNormal];
    myButton.layer.borderColor = [UIColor redColor].CGColor;
    myButton.layer.borderWidth = 2 ;
    myButton.layer.cornerRadius = 5 ;
    [myButton addTarget:self action:@selector(ButtonClicked:) forControlEvents:UIControlEventTouchUpInside];
    [myScrollView addSubview:myButton];
    pageControl = [[UIPageControl alloc] initWithFrame:CGRectMake(0, HEIGHT - 50, WIDTH, 40)];
    pageControl.backgroundColor = [UIColor clearColor];
    pageControl.numberOfPages = 4 ;
    [self.view addSubview:myScrollView];
     [self.view addSubview:pageControl];
}
#pragma mark myButton 点击事件
-(void) ButtonClicked:(UIButton *) sender
{
  
//    NSUserDefaults * mydef = [NSUserDefaults standardUserDefaults];
//    [mydef setBool:YES forKey:@"abc"];
//    HZMainTabViewController * vc = [[HZMainTabViewController alloc] init];
//    [[UIApplication sharedApplication].delegate window].rootViewController = vc;
}
#pragma mark UIScrollViewDelegate 协议
-(void)scrollViewDidScroll:(UIScrollView *)_scrollView
{
    pageControl.currentPage = (NSInteger)(myScrollView.contentOffset.x / self.view.bounds.size.width);
}



@end
